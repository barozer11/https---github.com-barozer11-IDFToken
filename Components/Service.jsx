import React from "react";

const Service = () => {

  const service = [
    {
      title: "The Birth of a Nation",
      discription: "In 1948, Israel fought for its independence against surrounding Arab nations. The War of Independence was a testament to the determination and resilience of the Israeli people, as they established their homeland against overwhelming odds."
    },    
    {
      title: "Victory in Six Days",
      discription: "In 1967, Israel faced simultaneous attacks from Egypt, Jordan, and Syria. The IDF's lightning-fast campaign resulted in a decisive victory, securing Jerusalem, the West Bank, Gaza Strip, Sinai Peninsula, and Golan Heights"
    },
    {
      title: "A Nation's Resolve",
      discription: "In 1973, Israel was surprised by coordinated attacks from Egypt and Syria on Yom Kippur, the holiest day in Judaism. Despite initial setbacks, the IDF rallied and pushed back the invaders, reaffirming Israel's strength and resilience."
    },
    {
      title: "Defending the Northern Border",
      discription: "During the 1982 Lebanon War, Israel sought to end PLO attacks from Lebanon. The conflict led to the IDF's withdrawal but also laid the groundwork for the South Lebanon security zone."
    },
    {
      title: "Facing Terror from Gaza",
      discription: "In response to ongoing rocket attacks and terrorism from Hamas-controlled Gaza, Israel has engaged in multiple conflicts. Operations such as Cast Lead, Protective Edge, and Guardian of the Walls aim to protect Israeli civilians and dismantle terrorist infrastructure."
    },
    {
      title: "A Daring Rescue",
      discription: "In 1976, Israeli commandos executed Operation Entebbe, rescuing hostages held by Palestinian and German hijackers at Uganda's Entebbe Airport. The mission showcased the IDF's elite capabilities and unwavering commitment to saving lives."
    }
  ];

  return <section id="service" className="small_pb">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
          <div className="title_default_light title_border text-center ">
            <h4 className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s">Together, We Stand Strong!</h4>
                <p className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"> <strong>Donate Today: </strong>
                  Every donation, no matter the size, makes a meaningful impact on the ground.
                   Your generosity fuels the IDF's mission and protects Israel's security.</p>
                  <p className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"> <strong>Spread the Word: </strong>
                  Share our cause with your friends, family, and social networks.
                   Together, we can amplify our efforts and make a difference.</p>                   
          </div>
        </div>
      </div>
      <div className="row">
        {
          service.map((service,i) => (
            <div key={i + 1} className="col-lg-4 col-md-6 col-sm-12">
              <div className="box_wrap text-center animation"
              data-animation="fadeInUp"
                data-animation-delay={`0.${i + 1}`}>

                  <h4>{service.title}</h4>
                  <p>{service.discription}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </section>
};

export default Service;
