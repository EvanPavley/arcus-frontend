import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
  state = {
    showBotDetails: false,
    selectedBot: {},
  }
  //2. Indexing bots
  renderAllBots = () => {
    return this.props.allBots.map(bot => {
      return(
        <BotCard
          bot={bot}
          enlistedBot={false}
          action={this.showBotDetails}
          key={bot.id}
        />
      )
    })
  }

  showBotDetails = (bot) => {
    this.setState({
      showBotDetails: true,
      selectedBot: bot,
    })
  }

  goBackToAll = () => {
    this.setState({showBotDetails: false})
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.state.showBotDetails === false ?
            this.renderAllBots()
          :
            <BotSpecs
              bot={this.state.selectedBot}
              enlistTheBot={this.props.enlistTheBot}
              goBackToAll={this.goBackToAll}
            />
          }
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
