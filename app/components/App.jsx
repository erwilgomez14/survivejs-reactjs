import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {
                    id: uuid.v4(),
                    task: 'Learn React'
                },
                {
                    id: uuid.v4(),
                    task: 'Do laundry'
                }
            ]
        };
    }
    render() {
        const { notes } = this.state;
        return (
            <div>
                <button onClick={this.addNote}>+</button>
                <Notes notes={notes} />
            </div>
        );
    }

    addNote = () => {
        // Es posible escribir esto de forma imperativa, es decir,
        // a través de `this.state.notes.push` y, después,
        // `this.setState({notes: this.state.notes})`.
        //
        // Suelo favorecer el estilo funcional cuando tiene sentido.
        // Incluso cuando es necesario escribir más código, ya que
        // prefiero los beneficios (facilidad para razonar, no
        // efectos colaterales) que trae consigo.
        //
        // Algunas librerias, como Immutable.js, van un paso más allá.
        this.setState({
            notes: this.state.notes.concat([{
                id: uuid.v4(),
                task: 'New task'
            }])
        });
    }
}
// const notes = [
//     {
//         id: uuid.v4(),
//         task: 'Learn React'
//     },
//     {
//         id: uuid.v4(),
//         task: 'Do laundry'
//     }
// ];


// export default () => (
//     <div>
//         <button onClick={() => console.log('añadir nota')}>+</button>
//         <Notes notes={notes} />
//     </div>
// );


// export default () => <Notes />;