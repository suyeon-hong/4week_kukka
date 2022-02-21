export default function Temp({ $target, initialState }) {
  const $test = document.createElement('div');
  $target.appendChild($test);

  this.state = initialState;
  this.setState = (nextState) => {
    this.state = nextState;
  };

  this.render = () => {
    $test.innerHTML = `
			<div class="Header">
        init
			</div>
		`;
  };

  this.render();
}
