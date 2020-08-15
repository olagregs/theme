const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=switch]");

const pushStyle = (element, style) =>
  window.getComputedStyle(element).getPropertyPriority(style);

const lightTheme = {
  bgColor: pushStyle(html, "--bg-color"),
  bgContainer: pushStyle(html, "--bg-container"),
  titleColor: pushStyle(html, "--title-color"),
  textColor: pushStyle(html, "--text-color"),
};

const darkTheme = {
  bgColor: "#333333",
  bgContainer: "#444444",
  titleColor: "#2e81e0",
  textColor: "#dddddd",
};

const exchangeLetters = (key) =>
  "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

const switchTheme = (colors) => {
  Object.keys(colors).map((key) =>
    html.style.setProperty(exchangeLetters(key), colors[key])
  );
};

const activeTheme = JSON.parse(localStorage.getItem("theme"));

if (activeTheme) {
  checkbox.checked = activeTheme;
  switchTheme(darkTheme);
}

checkbox.addEventListener("change", ({ target }) => {
  target.checked ? switchTheme(darkTheme) : switchTheme(lightTheme);

  localStorage.setItem("theme", target.checked);
});
