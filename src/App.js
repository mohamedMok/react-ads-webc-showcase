import "./App.css";

function App() {
  const handleToggle = () => {
    console.log('Alright')
  };
  const selectValue = 'option1'
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
      <h1>Welcome to ADS web component showcase</h1>
      <h2>Basic components</h2>
      <h3>Buttons</h3>
      <div class="example">
        <m-button label="Primary"></m-button>

        <m-button label="Bordered" size="m" bordered="true"></m-button>

        <m-button label="Large button" size="l"></m-button>
        <m-button
          label="With icon"
          size="m"
          iconname="navigation-arrow-arrow--left-32px"
          iconmode="left"
          bordered="true"
        ></m-button>
      </div>

      <h3>Badges</h3>
      <div class="example">
        <m-badge label="Primary"></m-badge>
        <m-badge label="Success" type="success"></m-badge>
        <m-badge label="Danger" type="danger"></m-badge>
        <m-badge label="Warning" type="warning"></m-badge>
        <m-badge label="Neutral" type="neutral"></m-badge>
      </div>

      <h3>Cards</h3>
      <div class="example">
        <m-card
          title="A card in its outlined version"
          imgsrc="https://images.unsplash.com/photo-1534889156217-d643df14f14a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=640"
          outlined="true"
          imgalt="This is the Card image"
          subtitle="A subtitle"
        >
          <p>
            Fusce iaculis dolor nulla, a maximus ipsum sollicitudin et. Ut
            condimentum at orci aliquam feugiat. Curabitur sagittis placerat leo
            sit amet pharetra.
          </p>
          <m-button label="Buy it" size="s">
            {" "}
          </m-button>
        </m-card>
      </div>

      <h2>Form</h2>
      <h3>Select</h3>
      <m-select
        placeholder="Choose an option"
        options={opts}
        valueselected={selectValue}
      ></m-select>
      {selectValue}
      <h3>Text input</h3>
      <div class="example">
        <m-field label="Date input" id="datainput">
          <m-textinput
            name="txt1"
            inputtype="date"
            value="2001-09-11"
            placeholder="Text input"
          ></m-textinput>
        </m-field>

        <m-textinput
          name="txt1"
          inputtype="number"
          type="number"
          value="inputNumber"
          placeholder="Text input"
        ></m-textinput>
      </div>

      <h3>Text area</h3>
      <m-textarea name="txt1" type="date" placeholder="Text Area"></m-textarea>

      <h3>Checkbox</h3>
      <div class="example">
        <m-checkbox
          class="space"
          name="chx"
          label="Default"
          checked="checkboxValue"
        ></m-checkbox>

        <m-checkbox name="chx"></m-checkbox>

        <m-checkbox
          name="chx"
          label="Indeterminate"
          indeterminate="true"
        ></m-checkbox>
      </div>

      <h3>Radio</h3>
      <div class="example">
        <m-radio id="radio" name="radio1" label="Default"></m-radio>
        <m-radio
          id="radio"
          name="radio1"
          label="Disabled"
          disabled="true"
        ></m-radio>
        <m-radio
          id="radio"
          name="radio1"
          label="Invalid"
          isinvalid="true"
        ></m-radio>
      </div>

      <h3>Toogle</h3>
      <div class="example">
        <m-toggle
          label="Default"
          checked="toggleCheck"
        ></m-toggle>
        <m-toggle name="toggle" label="Disabled" disabled="true"></m-toggle>
        <m-toggle label="Small" value="{{ toggleCheck }}"></m-toggle>
      </div>
    </div>
  );
}

export default App;
