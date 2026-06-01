import "./Destinationstyles.css";
import DestinationData from "./DestinationData";

const Destination = (props) => {
    return (
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>
          
           <DestinationData
           className="first-dest"
           heading="Rishikesh, Uttarakhand"
           text=" Rishikesh's beauty lies in its harmonious blend of spirituality, pristine nature, and thrilling adventure, set against the majestic backdrop of the Himalayan foothills. Its serene atmosphere is shaped by the powerful Ganges River flowing through the city, fringed by green hills and jungle-clad mountains. This holy town also offers breathtaking views from the iconic suspension bridges, serene ashrams for meditation, vibrant evening Ganga Aarti ceremonies, and a plethora of adventure sports like white-water rafting, appealing to both spiritual seekers and nature lovers alike.  "
           img1="https://images.unsplash.com/photo-1713340546638-5e30e2b7b1fe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
           img2="https://images.unsplash.com/photo-1698979007450-f06ae1ee57a0?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3"
           
           
           /> 

           <DestinationData
           className="first-dest-reverse"
           heading="Shri Badrinath, Uttarakhand"
           text="Shri Badrinath is a revered pilgrimage site nestled in the Garhwal Himalayas, known for its stunning landscapes and spiritual significance. The town is home to the ancient Shri Badrinath Temple, dedicated to Lord Vishnu, which attracts thousands of devotees each year. Surrounded by snow-capped peaks and the Alaknanda River, Shri Badrinath offers breathtaking views and a serene atmosphere for meditation and reflection. The region is also a gateway to several trekking routes, including the challenging trek to Valley of Flowers, making it a popular destination for adventure enthusiasts and nature lovers alike."
           img1="https://www.chardham-pilgrimage-tour.com/assets/images/chardham-banner7.webp"
           img2="https://www.radissonholidays.com/wp-content/uploads/2020/02/1ca14c050f7a6db8976b875deea40e62.jpg"
           
           /> 
        </div>
        
    );
};

export default Destination;