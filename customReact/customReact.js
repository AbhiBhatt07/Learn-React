function customRender(a, b) {
  //   const domElement = document.createElement(ReactElement.TagType);
  //   domElement.innerHTML = ReactElement.comment;
  //   domElement.setAttribute("href", ReactElement.props.href);
  //   domElement.setAttribute("target", ReactElement.props.target);
  //   b.appendChild(domElement);

  const domElement = document.createElement(ReactElement.TagType);
  domElement.innerHTML = ReactElement.comment;
  for (const key in ReactElement.props) {
    domElement.setAttribute(key, ReactElement.props[key]);
  }
  b.appendChild(domElement);
}

const ReactElement = {
  TagType: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
    type : 'text'
  },
  comment: "This is Link Please Click.",
};

const MainContainer = document.getElementById("root");

customRender(ReactElement, MainContainer);
