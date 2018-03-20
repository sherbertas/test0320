import * as React from 'react';
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import styles from './ProjectSizingTool.module.scss';
import { IProjectSizingToolProps } from './IProjectSizingToolProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class ProjectSizingTool extends React.Component<IProjectSizingToolProps, {}> {
  state = {
    scores: [],
    score: 0
  }
  constructor (props){
    super(props);
    this.state = {
      scores : [0, 0, 0, 0, 0, 0, 0, 0, 0],
      score: 0
    }
  }


  public render(): React.ReactElement<IProjectSizingToolProps> {
    return (
      
      <div className={ styles.projectSizingTool }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <ChoiceGroup label='Project Complexity'
                options={[
                  {key: '1', text: 'Well Mastered Routine'},
                  {key: '3', text: 'Many similar projects done before'},
                  {key: '5', text: 'Some Experience / High Bid Value'},
                  {key: '8', text: 'Complex / Bespoke Solution'}
                ]} 
                onChange={ this._onChoice1Change } required = {true}
              />
              <ChoiceGroup label='Bid Value / Contract'
                options={[
                  {key: '1', text: '0K – £100K / Cost + fee'},
                  {key: '3', text: '£0K - £100K / Time & Material'},
                  {key: '5', text: '75K - £1M / Lump Sum'},
                  {key: '8', text: '£750K + / Lump Sum'}
                ]} 
                onChange={ this._onChoice2Change } required = {true}
              />
              <a href="#" className={ styles.button }>
                <span className={ styles.label } >{this.state.score}</span>
              </a>

            </div>
          </div>
        </div>
      </div>
    )

  }

  private calculateScore(scores) {
    var score = 0;
    console.log ("scores: " + scores)
    for (var i = 0; i < scores.length; i++) {
      score += parseInt(scores[i]);
    }
    return score;
  }

  @autobind
  public _onChoice1Change(ev: React.FormEvent<HTMLInputElement>, option: any) {
    var tempScores = this.state.scores.slice();
    tempScores[0] = option.key;
    var newScore = this.calculateScore(tempScores);
    this.setState({
       score : newScore
    });  
  }

  

  private _onChoice2Change(ev: React.FormEvent<HTMLInputElement>, option: any) {
    var tempScores = this.state.scores.slice();
    tempScores[1] = option.key;
    var newScore = this.calculateScore(tempScores);
    this.setState({
       score : newScore
    });  
  }


}





