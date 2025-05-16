
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}", 
        ],
          theme: {
              extend: {
                    colors: {
                            primary: "#5C27FE",       
                                    secondary: "#843FF3",     
                                            accent: "#F4F4F4",        
                                                    dark: "#1E1E1E",
                                                            textMain: "#111827",      
                                                                    textSubtle: "#6B7280",    
                                                                          },
                                                                                fontFamily: {
                                                                                        sans: ['Inter', 'sans-serif'], 
                                                                                                heading: ['"Playfair Display"', 'serif'], 
                                                                                                      },
                                                                                                            boxShadow: {
                                                                                                                    card: "0 4px 12px rgba(0, 0, 0, 0.08)",
                                                                                                                          },
                                                                                                                                animation: {
                                                                                                                                        fadeIn: "fadeIn 1s ease-in forwards",
                                                                                                                                                slideUp: "slideUp 0.6s ease-out forwards",
                                                                                                                                                      },
                                                                                                                                                            keyframes: {
                                                                                                                                                                    fadeIn: {
                                                                                                                                                                              "0%": { opacity: 0 },
                                                                                                                                                                                        "100%": { opacity: 1 },
                                                                                                                                                                                                },
                                                                                                                                                                                                        slideUp: {
                                                                                                                                                                                                                  "0%": { opacity: 0, transform: "translateY(20px)" },
                                                                                                                                                                                                                            "100%": { opacity: 1, transform: "translateY(0)" },
                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                          },
                                                                                                                                                                                                                                              },
                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                  plugins: [],
                                                                                                                                                                                                                                                  };