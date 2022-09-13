import "./Home.css";

export default function Home() {
  function redirectPage(target) {
    window.open(target, "_blank").focus();
  }

  return (
    <>
      <div id="home" className="home-wrapper">
        <div className="home-container">
          <div className="stage-perspective parallax-perspective">
            <div className="stage-container">
              <main className="stage">
                <ul className="projects">
                <li
                    className="projects-li"
                    onClick={() =>
                      redirectPage(
                        "https://masonwatson.github.io/client/"
                      )
                    }
                  >
                    <div className="project-container moviebox">
                      <a>
                        MovieBox
                      </a>
                    </div>
                  </li>
                  <li
                    className="projects-li"
                    onClick={() =>
                      redirectPage(
                        "https://masonwatson.github.io/pathfinding-visualizer/"
                      )
                    }
                  >
                    <div className="project-container pathfinding-visualizer">
                      <a>
                        Pathfinding
                        <br />
                        Visualizer
                      </a>
                    </div>
                  </li>
                  <li
                    className="projects-li"
                    onClick={() =>
                      redirectPage(
                        "https://masonwatson.github.io/sorting-visualizer/"
                      )
                    }
                  >
                    <div className="project-container sorting-visulizer">
                      <a>
                        Sorting-Algo
                        <br />
                        Visualizer
                      </a>
                    </div>
                  </li>
                  <li
                    className="projects-li"
                    onClick={() => redirectPage("https://masonwatson.github.io/note-taker/")}
                  >
                    <div className="project-container note-taker">
                      <a>
                        Note
                        <br />
                        Taker
                      </a>
                    </div>
                  </li>
                  <li
                    className="projects-li"
                    onClick={() => redirectPage("https://masonwatson.github.io/api-project/")}
                  >
                    <div className="project-container api-project">
                      <a>
                        API
                        <br />
                        Project
                      </a>
                    </div>
                  </li>
                </ul>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
