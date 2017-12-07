
import React, { Component } from 'react';
import { View, Text,  StyleSheet, ScrollView } from 'react-native';
import Timeline  from 'react-native-timeline-listview';

export default class Steps extends React.Component {
	constructor(){
		super()
		  this.onEventPress = this.onEventPress.bind(this)
			this.renderSelected = this.renderSelected.bind(this)
			this.renderDetail = this.renderDetail.bind(this)

		this.Data = [
			{time: '09:00', title: 'Chambre d\'entrée', description: 'Votre enfant est super content, il joue à croque carotte, saute et mange du chocolat avec du fromage', icon: require('./bleu.png')},
    	{time: '10:45', title: 'Couloir', description: 'Votre enfant fait de galipettes', icon: require('./vert.png')},
    	{time: '12:00', title: 'Salle d\'attente', description: 'Votre enfant dort', icon: require('./rose.png')},
    	{time: '14:00', title: 'Bloc opératoire', description: 'Votre enfant est super content, il joue à croque carotte, saute et mange du chocolat avec du fromage', icon: require('./bleu.png')},
			{time: '16:30', title: 'Salle de réveil', description: '', icon: require('./vert.png')},
			{time: '17:30', title: 'Chambre de sortie', description: 'Votre enfant est super content, il joue à croque carotte, saute et mange du chocolat avec du fromage', icon: require('./rose.png')},
		]
		this.state = {selected: null}
	
	}

	onEventPress(data){
    this.setState({selected: data})
  	}

  	renderSelected(){
      if(this.state.selected)
        return <Text style={{marginTop:10}}>Selected event: {this.state.selected.title} at {this.state.selected.time}</Text>
	}

	renderDetail(rowData, sectionID, rowID) {
    let title = <Text style={[styles.title]}>{rowData.title}</Text>
    var desc = null
    if(rowData.description && rowData.imageUrl)
      desc = (
        <View style={styles.descriptionContainer}>   
          <Image source={{uri: rowData.imageUrl}} style={styles.image}/>
          <Text style={[styles.textDescription]}>{rowData.description}</Text>
        </View>
      )
    
    return (
      <View style={{flex:1}}>
        {title}
        {desc}
      </View>
    )
}





	render() {
		return(
			<View style={styles.container}>
				{this.renderSelected()}
		        <Timeline 
		          style={styles.list}
		          data={this.Data}
		          //circleSize={20}
		          //circleColor='#8ABD24'
		          lineColor='#8ABD24'
		          timeContainerStyle={{minWidth:52, marginTop: -5}}
		          timeStyle={{textAlign: 'center', color:'black', padding:5}}
		          descriptionStyle={{color:'gray'}}
		          options={{
		            style:{paddingTop:5}
		          }}
		          onEventPress={this.onEventPress}                    
		          separator={false}
		          detailContainerStyle={{marginBottom: 20, paddingLeft: 5, paddingRight: 5, backgroundColor: "white",   borderWidth: 2, borderColor: '#E3007E',}}
				      //columnFormat='two-column'
              columnFormat='single-column-left'
              innerCircle={'icon'}
		        />
			</View>
		);
	}

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
	  paddingTop:35,
    backgroundColor:'white'
  },
  list: {
    flex: 1,
    marginTop:20,
  },
  title:{
    fontSize:16,
    fontWeight: 'bold'
  },
  descriptionContainer:{
    flexDirection: 'row',
    paddingRight: 50
  },
  image:{
    width: 50,
    height: 50,
    borderRadius: 25
  },
  textDescription: {
    marginLeft: 10,
    color: 'gray'
  }
});