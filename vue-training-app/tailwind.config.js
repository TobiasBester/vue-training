module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: {
    options: {
      safelist: [/(bg|from|via|to|border|text)-(.*)-(\\d{1}0{1,2})/]
    }
  }
}
