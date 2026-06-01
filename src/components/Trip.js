import "./Tripstyles.css";
import TripData from "./TripData";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image="https://i.pinimg.com/736x/ce/7a/14/ce7a14a10f6d8f4612702e9d6cc1af34.jpg"
          heading="Trip to Devprayag"
          text=" Devprayag is a picturesque town located in the Indian state of Uttarakhand, renowned for its spiritual significance and stunning natural beauty. It is situated at the confluence of the Alaknanda and Bhagirathi rivers, which together form the sacred Ganges River. Devprayag is one of the Panch Prayags (five confluences) in the region and holds great importance in Hindu mythology and pilgrimage. The town is surrounded by lush green hills and offers breathtaking views of the river valleys, making it a popular destination for both spiritual seekers and nature enthusiasts. Visitors can explore ancient temples, take part in religious ceremonies, and enjoy serene walks along the riverbanks while soaking in the tranquil ambiance of this holy town."
        />
        <TripData
          image="https://images.unsplash.com/photo-1612438214708-f428a707dd4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2VkYXJuYXRofGVufDB8fDB8fHww"
          heading="Trip to Kedarnath"
          text="Kedarnath is a revered town located in the Indian state of Uttarakhand, known for its sacred temple dedicated to Lord Shiva. It is situated at an altitude of 3,583 meters in the Garhwal Himalayan range and is one of the Char Dham pilgrimage sites. The town is surrounded by stunning snow-capped peaks and offers breathtaking views of the Kedarnath range. The Kedarnath Temple, built in ancient times, is a significant pilgrimage destination for Hindus and attracts thousands of devotees each year. The journey to Kedarnath involves a trek of approximately 16 kilometers from Gaurikund, and the serene ambiance, along with the spiritual significance of the place, makes it a must-visit destination for those seeking solace and divine blessings."
        />
        <TripData
          image="https://images.unsplash.com/photo-1606163803490-73ce8693ccc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2FuZ290cml8ZW58MHx8MHx8fDA%3D"
          heading="Trip to Gangotri"
          text="Gangotri is a sacred town located in the Indian state of Uttarakhand, known for its stunning natural beauty and spiritual significance. It is situated at an altitude of 3,042 meters in the Garhwal Himalayan range and is one of the Char Dham pilgrimage sites. Gangotri is the origin of the sacred Ganges River, which is worshipped by millions of Hindus. The town is surrounded by majestic snow-capped peaks and offers breathtaking views of the Bhagirathi River. The Gangotri Temple, dedicated to Goddess Ganga, is a significant pilgrimage destination and attracts thousands of devotees each year. The serene ambiance, along with the spiritual importance of the place, makes it a must-visit destination for those seeking peace and divine blessings."
        />
      </div>
    
    </div>
    );
}

export default Trip;