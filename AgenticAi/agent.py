import os
from dotenv import load_dotenv


load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), ".env"))

from langchain_groq import ChatGroq
from langchain_core.messages import SystemMessage
from langgraph.prebuilt import create_react_agent
from langgraph.checkpoint.memory import MemorySaver
from tools import tools
 

SYSTEM_PROMPT = """You are Trippy AI, a travel assistant for the Trippy travel booking platform.

STRICT RULES — always follow these:
1. When a user asks about weather ANYWHERE, you MUST call the get_weather tool. Never guess or skip it.
2. When a user asks about places to visit, you MUST call the get_places_to_visit tool.
3. When a user provides a booking ID, you MUST call the get_booking_info tool.
4. When a user asks about packages, you MUST call the get_travel_packages tool.
5. Never answer weather questions from memory — always call the tool.
6. Do not ask follow-up questions before calling tools. Call the tool first, then respond.

You help users with:
- Weather at travel destinations
- Places to visit and things to do
- Available travel packages on Trippy
- Booking status and support

Keep responses concise and well-formatted.
For issues you cannot resolve, direct users to support@trippy.com
"""
 

llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    temperature=0.7,
)
 

memory = MemorySaver()
 

agent = create_react_agent(
    model=llm,
    tools=tools,
    prompt=SystemMessage(content=SYSTEM_PROMPT),
    checkpointer=memory,
)
 
 
def run_agent(message: str, session_id: str) -> str:
    """Run the agent with a user message and session ID for memory."""
    config = {"configurable": {"thread_id": session_id}}
 
    result = agent.invoke(
        {"messages": [{"role": "user", "content": message}]},
        config=config,
    )
 
    return result["messages"][-1].content