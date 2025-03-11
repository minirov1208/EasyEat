/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./frontend/**/*.html", "./frontend/**/*.js", "./templates/**/*.html", "./*/templates/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"), // 使用 require 加載 DaisyUI 插件
  ],
  daisyui: {
    themes: ["light"], // 指定啟用的主題
  },
};
