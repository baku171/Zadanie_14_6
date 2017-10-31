var Counter = React.createClass({
    getDefaultProps: function() {
        console.log('Ustawienie domyślnych propsów');
    },
    getInitialState: function() {
        return {
            counter: 0
        };
        console.log('Ustawienie domyślnego stanu');
    },

    componentWillMount: function() {
        console.log('Przygotowanie komponentu do zamontowania');
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        console.log('Renderowanie komponentu')
        return React.createElement('div', {},
            React.createElement('button', { onClick: this.increment }, 'Dodaj'),
            React.createElement('button', { onClick: this.decrement }, 'Odejmij'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    },

    componentDidMount: function() {
        console.log('Pobieranie danych z serwera po renderowaniu komponentów, albo użycie jQuery na istniejących już elementach DOM');
    },

    componentWillReciveProps: function() {
        console.log('Aktualizacja stanu na podstawie otrzymanych propsów');
    },

    shouldComponentUpdate: function() {
        console.log('Sprawdzenie, czy konieczne jest przerysowanie komponentu. Pozwala na optymalizację apki');
        return true;
    },

    componentWillUpdate: function() {
        console.log('Przygotowanie do ponownego renderowania');
    },

    componentDidUpdate: function() {
        console.log('Ponowne modyfikacje drzewa DOM po zmianach');
    },

    componentWillUnmount: function() {
        console.log('Odmontowanie komponentu z drzewa DOM');
    }

});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));