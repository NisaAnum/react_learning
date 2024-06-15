
function customRender(element, container) {
          const domElement =  document.createElement(element.type)
          domElement.innerHTML = element.toshow;
          for (const prop in reactElement.props) {
            if(prop === "toshow") continue
              domElement.setAttribute(prop, reactElement.props[prop]);
            }
            container.appendChild(domElement)
          }


const reactElement= {
    type : "a",
    props : {
        href : "https://google.com",
        traget : "_Blank"
    },
    toshow : "Click me to visit google"
}

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer)