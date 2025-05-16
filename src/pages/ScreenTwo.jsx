import React from 'react';

const ScreenTwo = () => {
  return (
      <div className="bg-white text-black p-6">
            <h2 className="text-4xl font-bold text-center mb-6">Contact Us</h2>

                  <div className="flex flex-col lg:flex-row justify-around items-start gap-8">
                          <div>
                                    <h3 className="text-2xl font-semibold mb-2">Let’s talk</h3>
                                              <p className="text-gray-600 mb-4">We collaborate with thousands...</p>
                                                        <p><strong>Email:</strong> info@example.com</p>
                                                                  <p><strong>Call:</strong> +11536/123-4567</p>
                                                                            <p><strong>Address:</strong> Open Address</p>
                                                                                    </div>

                                                                                            <form className="w-full max-w-md">
                                                                                                      <input className="block w-full p-2 mb-3 border" type="text" placeholder="Name" />
                                                                                                                <input className="block w-full p-2 mb-3 border" type="email" placeholder="Email" />
                                                                                                                          <input className="block w-full p-2 mb-3 border" type="text" placeholder="Subject" />
                                                                                                                                    <textarea className="block w-full p-2 mb-3 border" placeholder="Message" rows="4"></textarea>
                                                                                                                                              <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">Send Message</button>
                                                                                                                                                      </form>
                                                                                                                                                            </div>

                                                                                                                                                                  <div className="mt-8">
                                                                                                                                                                          <iframe
                                                                                                                                                                                    title="Map"
                                                                                                                                                                                              src="https://maps.google.com/maps?q=New+York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                                                                                                                                                                                        className="w-full h-64"
                                                                                                                                                                                                                  allowFullScreen
                                                                                                                                                                                                                          />
                                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                                      <footer className="mt-12 text-center text-white bg-purple-800 p-6">
                                                                                                                                                                                                                                              <p>© 2025 ExAutomation</p>
                                                                                                                                                                                                                                                    </footer>
                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                                          };

                                                                                                                                                                                                                                                          export default ScreenTwo;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        