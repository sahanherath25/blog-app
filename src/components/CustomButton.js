import {Component} from "react";
import {Button, Text, View} from "react-native";

/*let getStateFromLocalStorage=()=>{
    const storage=localStorage.getItem("counterState");
    if(storage)return JSON.parse(storage);
    return {counter:0}

    /!*if(storage)return JSON.parse(storage);
    if (storage !== null && storage !== undefined) {
        return JSON.parse(storage);
    }*!/
}*/
class CustomButton extends  Component{
    constructor(props) {
        super(props);
        this.state={
            counter:0,
        }

        // this.state=getStateFromLocalStorage();

        this.increment=this.increment.bind(this)
    }
    // increment = () => {
    //     this.setState({counter:this.state.counter + 1})
    // };

    increment() {

        // this.setState({counter:this.state.counter + 1})
        this.setState((prevState)=> {
            // prevState.counter >this.props.max ? return :
            console.log(this.props.max )
            if( prevState.counter >=this.props.max ) return;
            //TODO IF we return undefined our state will not update
            return {counter:prevState.counter+1}

        },()=>{
            //
            // localStorage.setItem("counterState",JSON.stringify(this.state))
            //
            // console.log(localStorage)

        })

    };

    decrement = () => {
        // this.setState({counter:this.state.counter - 1})
        // this.setState({counter:this.state.counter - 1})
        // this.setState({counter:this.state.counter - 1})
        //
        //
        // this.setState({counter:this.state.counter - 1},()=>{
        //     console.log(this.state.counter)
        //
        // })

        this.setState((prevState)=> {

            // prevState.counter >this.props.max ? return :

            console.log(this.props.min )

            if( prevState.counter <=this.props.min ) return;
            return {counter:prevState.counter-1}


        })

    };

    render() {
        const {counter}=this.state;
        return(
            <View>
                <Text>Counter : {counter}</Text>

                {/*<Button title={"+"} onPress={()=>this.setState({counter:this.state.counter+1})}/>*/}
                {/*<Button title={"-"} onPress={()=>this.setState({counter:this.state.counter-1})}/>  */}

                <Button title={"+"} onPress={this.increment}/>
                <Button title={"-"} onPress={this.decrement}/>


            </View>
        )
    }
}

export default  CustomButton;