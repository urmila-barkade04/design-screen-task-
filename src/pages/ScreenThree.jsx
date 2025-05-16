import React from 'react';

const services = [
  { title: "Control Panel Design", desc: "Lorem ipsum..." },
    { title: "Industrial Wiring", desc: "Conduct hourly..." },
      { title: "PLC & SCADA", desc: "Integrate systems..." },
      ];

      const ScreenThree = () => {
        return (
            <div className="bg-white text-black p-6">
                  <header className="text-center mb-10">
                          <h1 className="text-4xl font-bold">Through Smart Automation</h1>
                                  <p className="text-gray-600">Innovative solutions for modern industrial needs</p>
                                        </header>

                                              <section>
                                                      <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
                                                              <div className="grid md:grid-cols-3 gap-6">
                                                                        {services.map((srv, i) => (
                                                                                    <div key={i} className="p-4 border rounded shadow">
                                                                                                  <h3 className="font-bold mb-2">{srv.title}</h3>
                                                                                                                <p className="text-gray-600">{srv.desc}</p>
                                                                                                                            </div>
                                                                                                                                      ))}
                                                                                                                                              </div>
                                                                                                                                                    </section>

                                                                                                                                                          <section className="mt-10">
                                                                                                                                                                  <h2 className="text-2xl font-semibold mb-4">Recent Projects</h2>
                                                                                                                                                                          <div className="flex flex-wrap gap-6">
                                                                                                                                                                                    {[{
                                                                                                                                                                                                title: "Wind Power Plant",
                                                                                                                                                                                                            desc: "Agricultural Dalm Installation",
                                                                                                                                                                                                                        img: "https://via.placeholder.com/300x200?text=Wind+Power"
                                                                                                                                                                                                                                  }, {
                                                                                                                                                                                                                                              title: "Food Processing Line",
                                                                                                                                                                                                                                                          desc: "Product Line Automation",
                                                                                                                                                                                                                                                                      img: "https://via.placeholder.com/300x200?text=Food+Line"
                                                                                                                                                                                                                                                                                }].map((proj, i) => (
                                                                                                                                                                                                                                                                                            <div key={i} className="w-full md:w-1/2 lg:w-1/3 p-2">
                                                                                                                                                                                                                                                                                                          <img src={proj.img} alt={proj.title} className="mb-2 rounded" />
                                                                                                                                                                                                                                                                                                                        <h4 className="font-semibold">{proj.title}</h4>
                                                                                                                                                                                                                                                                                                                                      <p className="text-gray-500">{proj.desc}</p>
                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                            ))}
                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                          </section>
                                                                                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                                                                                                                                                                };

                                                                                                                                                                                                                                                                                                                                                                                export default ScreenThree;