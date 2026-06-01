from langchain_tavily import TavilySearch
from langchain_core.tools import tool
import httpx
import os
from dotenv import load_dotenv

load_dotenv()

search_tool = TavilySearch(
    max_results=3,
    topic="general",
)


@tool
def get_weather(city: str) -> str:
    """Get the current weather for a city. Use this when the user asks about weather at a travel destination."""
    api_key = os.getenv("OPENWEATHER_API_KEY")

    if not api_key:
        return (
            "Weather API key not configured. "
            "Add OPENWEATHER_API_KEY to your .env file. "
            "Get a free key at openweathermap.org"
        )

    try:
        url = "https://api.openweathermap.org/data/2.5/weather"
        params = {"q": city, "appid": api_key, "units": "metric"}

        with httpx.Client() as client:
            response = client.get(url, params=params, timeout=10)
            response.raise_for_status()
            data = response.json()

        weather_desc = data["weather"][0]["description"].capitalize()
        temp = data["main"]["temp"]
        feels_like = data["main"]["feels_like"]
        humidity = data["main"]["humidity"]
        wind = data["wind"]["speed"]

        return (
            f"Weather in {city.title()}:\n"
            f"• Condition: {weather_desc}\n"
            f"• Temperature: {temp}°C (feels like {feels_like}°C)\n"
            f"• Humidity: {humidity}%\n"
            f"• Wind Speed: {wind} m/s"
        )

    except httpx.HTTPStatusError as e:
        if e.response.status_code == 404:
            return f"City '{city}' not found. Please check the spelling."
        return f"Could not fetch weather for {city}: {str(e)}"
    except Exception as e:
        return f"Error fetching weather: {str(e)}"


@tool
def get_places_to_visit(city: str) -> str:
    """Get top tourist places, attractions, and things to do in a city.
    Use this when the user asks about places to visit or things to do at a destination."""
    try:
        results = search_tool.invoke(f"top tourist places and attractions to visit in {city} travel guide")
        if isinstance(results, list):
            combined = "\n\n".join(
                [r.get("content", "") for r in results if r.get("content")]
            )
            return f"Places to visit in {city.title()}:\n\n{combined}" if combined else f"No results found for {city}."
        return str(results)
    except Exception as e:
        return f"Error fetching places for {city}: {str(e)}"



@tool
def get_travel_packages(destination: str) -> str:
    """Get available travel packages for a destination from Trippy.
    Use this when the user asks about packages, tours, or trips available on the platform."""
    
    packages = {
        "rishikesh": [
            {"name": "Rishikesh Adventure Camp", "duration": "2N/3D", "price": "₹8,999", "includes": "Camp Stay + Rafting + Bungee"},
            {"name": "Rishikesh Yoga Retreat", "duration": "3N/4D", "price": "₹11,499", "includes": "Ashram Stay + Yoga Sessions + Ganga Aarti"},
        ],
        "dehradun": [
            {"name": "Dehradun Explorer", "duration": "2N/3D", "price": "₹7,499", "includes": "Hotel + Sightseeing + Transfers"},
            {"name": "Dehradun & Mussoorie Combo", "duration": "3N/4D", "price": "₹12,999", "includes": "Hotel + Sightseeing + Transfers"},
        ],
        "haridwar": [
            {"name": "Haridwar Spiritual Tour", "duration": "1N/2D", "price": "₹5,999", "includes": "Hotel + Ganga Aarti + Temple Darshan"},
            {"name": "Haridwar & Rishikesh Combo", "duration": "2N/3D", "price": "₹9,499", "includes": "Hotel + Sightseeing + Ganga Aarti"},
        ],
        "mussoorie": [
            {"name": "Mussoorie Honeymoon Special", "duration": "3N/4D", "price": "₹14,999", "includes": "Resort + Candlelight Dinner + Sightseeing"},
            {"name": "Mussoorie Hill Escape", "duration": "2N/3D", "price": "₹9,999", "includes": "Hotel + Mall Road + Kempty Falls"},
        ],
        "chopta": [
            {"name": "Chopta Tungnath Trek", "duration": "2N/3D", "price": "₹8,499", "includes": "Camping + Trek Guide + Meals"},
            {"name": "Chopta Winter Camp", "duration": "3N/4D", "price": "₹11,999", "includes": "Snow Camping + Bonfire + Meals"},
        ],
        "badrinath": [
            {"name": "Badrinath Dham Yatra", "duration": "3N/4D", "price": "₹13,999", "includes": "Hotel + Darshan + Transfers"},
            {"name": "Badrinath & Kedarnath Combo", "duration": "5N/6D", "price": "₹22,999", "includes": "Hotel + Helicopter Option + Darshan"},
        ],
        "kedarnath": [
            {"name": "Kedarnath Dham Yatra", "duration": "3N/4D", "price": "₹12,999", "includes": "Hotel + Trek + Darshan"},
            {"name": "Kedarnath Helicopter Package", "duration": "2N/3D", "price": "₹24,999", "includes": "Helicopter + Hotel + Darshan"},
        ],
        "gangotri": [
            {"name": "Gangotri Dham Yatra", "duration": "3N/4D", "price": "₹11,999", "includes": "Hotel + Darshan + Transfers"},
        ],
        "yamunotri": [
            {"name": "Yamunotri Dham Yatra", "duration": "3N/4D", "price": "₹11,499", "includes": "Hotel + Trek + Darshan"},
        ],
        "char dham": [
            {"name": "Char Dham Yatra Classic", "duration": "11N/12D", "price": "₹45,999", "includes": "Hotel + All 4 Dhams + Transfers + Meals"},
            {"name": "Char Dham Helicopter Tour", "duration": "5N/6D", "price": "₹1,10,000", "includes": "Helicopter + 5-Star Hotel + All Darshans"},
        ],
        "do dham": [
            {"name": "Do Dham Yatra (Kedarnath + Badrinath)", "duration": "5N/6D", "price": "₹19,999", "includes": "Hotel + Both Dhams + Transfers"},
            {"name": "Do Dham Yatra (Gangotri + Yamunotri)", "duration": "5N/6D", "price": "₹18,499", "includes": "Hotel + Both Dhams + Transfers"},
        ],
        "devprayag": [
            {"name": "Devprayag Spiritual Retreat", "duration": "1N/2D", "price": "₹5,499", "includes": "Hotel + Sangam Darshan + Aarti"},
        ],
        "uttarakhand": [
            {"name": "Best of Uttarakhand", "duration": "7N/8D", "price": "₹28,999", "includes": "Hotel + Rishikesh + Haridwar + Mussoorie + Transfers"},
            {"name": "Uttarakhand Pilgrimage Special", "duration": "10N/11D", "price": "₹38,999", "includes": "Hotel + Char Dham + Rishikesh + Haridwar"},
        ],
    }

    key = destination.lower().strip()
    
    aliases = {
        "char dham yatra": "char dham",
        "chardham": "char dham",
        "4 dham": "char dham",
        "do dham yatra": "do dham",
        "dodham": "do dham",
        "2 dham": "do dham",
        "kedarnath": "kedarnath",
        "lédarnath": "kedarnath",
    }
    key = aliases.get(key, key)

    if key in packages:
        result = f"Available packages for {destination.title()} on Trippy:\n\n"
        for p in packages[key]:
            result += (
                f"📦 {p['name']}\n"
                f"   Duration: {p['duration']} | Price: {p['price']}\n"
                f"   Includes: {p['includes']}\n\n"
            )
        return result
    else:
        destinations = "Rishikesh, Dehradun, Haridwar, Mussoorie, Chopta, Badrinath, Kedarnath, Gangotri, Yamunotri, Char Dham, Do Dham, Devprayag"
        return f"No packages found for '{destination}'. We currently offer packages for: {destinations}."

    


# ── 5. Booking Support Tool ───────────────────────────────────────────────────
@tool
def get_booking_info(destination: str) -> str:
    """Get available travel packages for a destination from Trippy.
    Use this when the user asks about packages, tours, or trips available on the platform."""
    
    return f"""We have amazing packages for {destination.title()} on Trippy! 🏔️

Here's how to book your trip:

1️⃣ Go to the **Services** page from the top navigation
2️⃣ Browse available packages for {destination.title()}
3️⃣ Click the **Book Now** button on your preferred package
4️⃣ Fill in your travel details and confirm your booking

Need help or have questions before booking?
📩 Visit our **Contact Us** page and our team will get back to you!

Is there anything else I can help you with — like weather in {destination.title()} or places to visit there?"""


# ── All tools list (imported by agent.py) ─────────────────────────────────────
tools = [search_tool, get_weather, get_places_to_visit, get_travel_packages, get_booking_info]