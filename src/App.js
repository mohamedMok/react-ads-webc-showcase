import React, { useState } from "react";
import "./App.scss";

function App() {
  let [isLayerOpen, setIsLayerOpen] = useState(undefined);
  let [toggleCheck, setToggleCheck] = useState(true);
  const manageLayer = () => {
    setIsLayerOpen(isLayerOpen === true ? undefined : true);
  };
  const manageToggle = () => {
    setToggleCheck(toggleCheck === true ? undefined : true);
  };
  const selectValue = "option1";
  const opts = JSON.stringify([
    {
      text: "Option 1",
      value: "option1",
    },
    {
      text: "Option 2",
      value: "option2",
      disabled: true,
    },
    {
      text: "Option 3",
      value: "option3",
    },
    {
      text: "Option 4",
      value: "option4",
    },
  ]);
  return (
    <div className="App">
      <header class="header">ADEO Design System</header>
      <div class="welcome">
        Welcome to ADEO Design System’s Web Components showcase
      </div>

      <div class="notif">
        <m-notification
          class="notif"
          title="Information"
          href="https://mozaic.adeo.cloud/"
          linkcontent="Go to Mozaic Design System"
        >
          The showcase’s purpose is to present the efficiency of the
          Web-Components. Take note that this is not a comprehensive
          representation of the catalogue. Please, browse the official website
          to find out more.
        </m-notification>
      </div>
      <h2 class="title">Basic components</h2>
      <div class="wrapper">
        <h3 class="sub-title">Buttons</h3>
        <div class="example">
          <div class="items">
            <m-button label="Button label"></m-button>

            <m-button
              label="With icon"
              size="m"
              iconname="navigation-arrow-arrow--left-32px"
              iconmode="left"
              bordered="true"
            ></m-button>

            <m-button
              label="With icon"
              size="m"
              iconname="navigation-arrow-arrow--left-32px"
              iconmode="right"
              bordered="true"
            ></m-button>

            <m-button
              size="m"
              iconname="navigation-arrow-arrow--left-32px"
              iconmode="only"
              bordered="true"
            ></m-button>
          </div>

          <div class="items">
            <m-button label="Button label" size="s" bordered="true"></m-button>

            <m-button label="Button label" size="m" bordered="true"></m-button>

            <m-button label="Button label" size="l" bordered="true"></m-button>
          </div>

          <div class="items">
            <m-button label="Button label"></m-button>

            <m-button label="Button label" theme="neutral"></m-button>

            <m-button label="Button label" theme="danger"></m-button>
          </div>

          <div class="items">
            <m-button label="Button label" bordered="true"></m-button>

            <m-button
              label="Button label"
              theme="neutral"
              bordered="true"
            ></m-button>

            <m-button
              label="Button label"
              theme="danger"
              bordered="true"
            ></m-button>
          </div>
        </div>
      </div>

      <h3 class="sub-title">Badges</h3>
      <div class="example">
        <div class="items">
          <m-badge label="Primary"></m-badge>
          <m-badge label="Success" type="success"></m-badge>
          <m-badge label="Danger" type="danger"></m-badge>
          <m-badge label="Warning" type="warning"></m-badge>
          <m-badge label="Neutral" type="neutral"></m-badge>
        </div>
      </div>

      <h2 class="sub-title">Form elements</h2>
      <div class="example">
        <h3>Text input</h3>
        <div class="form-item">
          <m-textinput
            name="txt1"
            inputtype="text"
            placeholder="Text input"
          ></m-textinput>
        </div>

        <h3>Select</h3>
        <div class="form-item">
          <m-select
            placeholder="Choose an option"
            options={opts}
            valueselected={selectValue}
          ></m-select>
        </div>

        <h3>Datepicker</h3>
        <div class="form-item">
          <m-textinput
            name="txt1"
            inputtype="date"
            value="2022-06-06"
            placeholder="Datepicker"
          ></m-textinput>
        </div>

        <h3>Textarea</h3>
        <m-textarea name="txt1" placeholder="Text input"></m-textarea>

        <h3>Checkbox</h3>
        <div class="items">
          <m-checkbox name="chx"></m-checkbox>
          <m-checkbox class="space" name="chx" checked="true"></m-checkbox>
          <m-checkbox
            name="chx"
            indeterminate="true"
            label="Checkbox Label"
          ></m-checkbox>
        </div>
        <div class="items">
          <m-checkbox name="chx" label="Checkbox Label"></m-checkbox>
          <m-checkbox
            class="space"
            name="chx"
            checked="true"
            label="Checkbox Label"
          ></m-checkbox>
          <m-checkbox
            name="chx"
            indeterminate="true"
            label="Checkbox Label"
          ></m-checkbox>
        </div>

        <h3>Toogle</h3>
        <div class="items">
          <m-toggle value="false"></m-toggle>
          <m-toggle
            checked={toggleCheck}
            value={toggleCheck}
            onClick={manageToggle}
          ></m-toggle>

          <m-toggle label="Checkbox Label" value="false"></m-toggle>
          <m-toggle
            label="Checkbox Label"
            checked={toggleCheck}
            value={toggleCheck}
            onClick={manageToggle}
          ></m-toggle>
        </div>

        <div class="items">
          <m-toggle value="false" size="s"></m-toggle>
          <m-toggle
            checked={toggleCheck}
            value={toggleCheck}
            onClick={manageToggle}
            size="s"
          ></m-toggle>

          <m-toggle label="Checkbox Label" value="false" size="s"></m-toggle>
          <m-toggle
            label="Checkbox Label"
            checked={toggleCheck}
            value={toggleCheck}
            onClick={manageToggle}
            size="s"
          ></m-toggle>
        </div>
      </div>
      <h2 class="title">Complex component</h2>
      <h3 class="sub-title">Cards</h3>
      <div class="example">
        <div class="items">
          <m-card
            title="A card in its outlined version"
            imgsrc="https://images.unsplash.com/photo-1534889156217-d643df14f14a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=640"
            imgalt="This is the Card image"
            subtitle="A subtitle"
          >
            <p>
              Fusce iaculis dolor nulla, a maximus ipsum sollicitudin et. Ut
              condimentum at orci aliquam feugiat. Curabitur sagittis placerat
              leo sit amet pharetra.
            </p>
          </m-card>
          <m-card
            title="A card in its outlined version"
            imgsrc="https://images.unsplash.com/photo-1534889156217-d643df14f14a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=640"
            outlined="true"
            imgalt="This is the Card image"
            subtitle="A subtitle"
          >
            <p>
              Fusce iaculis dolor nulla, a maximus ipsum sollicitudin et. Ut
              condimentum at orci aliquam feugiat. Curabitur sagittis placerat
              leo sit amet pharetra.
            </p>
            <m-button label="Buy it" size="s">
              {" "}
            </m-button>
          </m-card>
        </div>
      </div>
      <h3 class="sub-title">Layer</h3>
      <div class="example">
        <div class="items">
          <m-button label="Open Layer " onClick={manageLayer}></m-button>
          <m-layer
            title="Layer title"
            layertitletag="h3"
            isopen={isLayerOpen}
            on-layer-closed={manageLayer} // Custom event
          >
            <small slot="content">
              <p>
                Fusce iaculis dolor nulla, a maximus ipsum sollicitudin et. Ut
                condimentum at orci aliquam feugiat. Curabitur sagittis placerat
                leo sit amet pharetra. Fusce iaculis dolor nulla, a maximus
                ipsum sollicitudin et. Ut condimentum at orci aliquam feugiat.
                Curabitur sagittis placerat leo sit amet pharetra. Fusce iaculis
                dolor nulla, a maximus ipsum sollicitudin et. Ut condimentum at
                orci aliquam feugiat. Curabitur sagittis placerat leo sit amet
                pharetra. Fusce iaculis dolor nulla, a maximus ipsum
                sollicitudin et. Ut condimentum at orci aliquam feugiat.
                Curabitur sagittis placerat leo sit amet pharetra. Fusce iaculis
                dolor nulla, a maximus ipsum sollicitudin et. Ut condimentum at
                orci aliquam feugiat. Curabitur sagittis placerat leo sit amet
                pharetra. Fusce iaculis dolor nulla, a maximus ipsum
                sollicitudin et. Ut condimentum at orci aliquam feugiat.
                Curabitur sagittis placerat leo sit amet pharetra. Fusce iaculis
                dolor nulla, a maximus ipsum sollicitudin et. Ut condimentum at
                orci aliquam feugiat. Curabitur sagittis placerat leo sit amet
                pharetra. Fusce iaculis dolor nulla, a maximus ipsum
                sollicitudin et. Ut condimentum at orci aliquam feugiat.
                Curabitur sagittis placerat leo sit amet pharetra. Fusce iaculis
                dolor nulla, a maximus ipsum sollicitudin et. Ut condimentum at
                orci aliquam feugiat. Curabitur sagittis placerat leo sit amet
                pharetra. Fusce iaculis dolor nulla, a maximus ipsum
                sollicitudin et. Ut condimentum at orci aliquam feugiat.
                Curabitur sagittis placerat leo sit amet pharetra. Fusce iaculis
                dolor nulla, a maximus ipsum sollicitudin et. Ut condimentum at
                orci aliquam feugiat. Curabitur sagittis placerat leo sit amet
                pharetra. Fusce iaculis dolor nulla, a maximus ipsum
                sollicitudin et. Ut condimentum at orci aliquam feugiat.
                Curabitur sagittis placerat leo sit amet pharetra. Fusce iaculis
                dolor nulla, a maximus ipsum sollicitudin et. Ut condimentum at
                orci aliquam feugiat. Curabitur sagittis placerat leo sit amet
                pharetra. Fusce iaculis dolor nulla, a maximus ipsum
                sollicitudin et. Ut condimentum at orci aliquam feugiat.
                Curabitur sagittis placerat leo sit amet pharetra. Fusce iaculis
                dolor nulla, a maximus ipsum sollicitudin et. Ut condimentum at
                orci aliquam feugiat. Curabitur sagittis placerat leo sit amet
                pharetra.
              </p>
            </small>
            <small slot="footer">
              <m-button label="Primary action"></m-button>
            </small>
          </m-layer>
        </div>
      </div>

      <h3 class="sub-title">Charts</h3>

      <div class="example">
        <m-donut
          title="Elements"
          data='[{"name":"Success","total":312,"patternId":"blue"},{"name":"Warning","total":99,"patternId":"gray"},{"name":"Information","total":160,"patternId":"orange"},{"name":"Danger","total":160,"patternId":"yellow"}]'
          colors='["#78be20","#fc961e","#25a8d0","#df382b"]'
          legendposition="left"
        ></m-donut>

        <m-bar-chart
          data='[{"group":"12 Juil.","Data":{"value":"165"}},{"group":"13 Juil.","Data":{"value":"100"}},{"group":"14 Juil.","Data":{"value":"125"}},{"group":"15 Juil.","Data":{"value":"110"}},{"group":"16 Juil.","Data":{"value":"60"}},{"group":"17 Juil.","Data":{"value":"125"}},{"group":"18 Juil.","Data":{"value":"110"}}]'
          chartheight="350"
          scalemax="200"
        ></m-bar-chart>
      </div>
    </div>
  );
}

export default App;
