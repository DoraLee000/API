class FilterableTable extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      contacts: []
    }
  }
  componentDidMount(){
    fetch('https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97')
      .then(res => res.json())
      .then(data => {
        return data.result.records.map(tours => {
          return {
            id: tours.id,
            name:tours.Name,
            zone:tours.Zone,
            pic: tours.Picture1,
            toldescribe:tours.Toldescribe,
            opentime:tours.Opentime,
          }
        })
      })
      .then(contacts => {
      this.setState({contacts})});
  }
  render(){
    return(
      <div className="contact">
        <FilterableContact contacts={this.state.contacts}/>
      </div>
    )
  }  
}

class FilterableContact extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      filterText: '',
      zone:'',
      contacts: []
    }
  }
  
  handleInput(searchTours){
    this.setState({
      filterText:searchTours,
      contacts:[]
    })
  }

  render(){
    return(
      <div>
        <Search onToursInput={this.handleInput.bind(this)} filterText={this.state.filterText}/>
        <List contacts={this.props.contacts} filterText={this.state.filterText} />
      </div>
    )
  }  
}

class Search extends React.Component{
  constructor(props){
    super(props);
  }
  handleInput(event){
    this.props.onToursInput(event.target.value);
  }
  
  render(){
    return(
      <div className="search-bar">
        <div className='search'>
      <i className="fa fa-search"></i>
      <input type="text" className="search-input" onChange={this.handleInput.bind(this)}></input>
        </div>
    </div>
    )
  } 
}

class List extends React.Component{
  render(){
      const filterContacts = this.props.contacts.filter((tours => {
      return tours.name.indexOf(this.props.filterText) !== -1
    })); 
    return(
      <div className='list-container'>
        <ul className='tour_list'>
          {filterContacts.map(
            (e) => <li className='tour-item' key={e.id}>
              <div className='tour_image'>
              <img src={e.pic} alt='pic' />
              </div>
              <div className='tour_contents'>
              <h4>{e.name}</h4>
                <p>營業時間:{e.toldescribe}</p>
                <p className='tour_map'>地區:{e.zone}</p>
                <p className='tour_time'>營業時間:{e.opentime}</p>
              </div>
              </li>
            ) 
          }
        </ul>
      </div>
    )
  }
}

const areas =[
      { name: '新興區', zip: '800' },
      { name: '前金區', zip: '801' },
      { name: '苓雅區', zip: '802' },
      { name: '鹽埕區', zip: '803' },
      { name: '鼓山區', zip: '804' },
      { name: '旗津區', zip: '805' },
      { name: '前鎮區', zip: '806' },
      { name: '三民區', zip: '807' },
      { name: '楠梓區', zip: '811' },
      { name: '小港區', zip: '812' },
      { name: '左營區', zip: '813' },
      { name: '仁武區', zip: '814' },
      { name: '大社區', zip: '815' },
      { name: '岡山區', zip: '820' },
      { name: '路竹區', zip: '821' },
      { name: '阿蓮區', zip: '822' },
      { name: '田寮區', zip: '823' },
      { name: '燕巢區', zip: '824' },
      { name: '橋頭區', zip: '825' },
      { name: '梓官區', zip: '826' },
      { name: '彌陀區', zip: '827' },
      { name: '永安區', zip: '828' },
      { name: '湖內區', zip: '829' },
      { name: '鳳山區', zip: '830' },
      { name: '大寮區', zip: '831' },
      { name: '林園區', zip: '832' },
      { name: '鳥松區', zip: '833' },
      { name: '大樹區', zip: '840' },
      { name: '旗山區', zip: '842' },
      { name: '美濃區', zip: '843' },
      { name: '六龜區', zip: '844' },
      { name: '內門區', zip: '845' },
      { name: '杉林區', zip: '846' },
      { name: '甲仙區', zip: '847' },
      { name: '桃源區', zip: '848' },
      { name: '那瑪夏區', zip: '849' },
      { name: '茂林區', zip: '851' },
      { name: '茄萣區', zip: '852' },
      { name: '東沙', zip: '817' },
      { name: '南沙', zip: '819' },
  ];

ReactDOM.render(<FilterableTable />, document.getElementById("container"));
