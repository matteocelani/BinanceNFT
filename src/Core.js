import React from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import App from './App';

class Core extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      body: "{\"category\":0,\"keyword\":\"\",\"orderBy\":\"list_time\",\"orderType\":-1,\"page\":1,\"rows\":100}",
      page: 1,
      error: null,
      isLoaded: false,
      coinsLoad: false,
      items: [],
      itemName: "",
      numItems: null,
      coins: [],
      filterTrade: null
    };
    this.mySubmitHandler = this.mySubmitHandler.bind(this);
    this.myChangeHandler = this.myChangeHandler.bind(this);
    this.loadData = this.loadData.bind(this);
  }

  async componentDidMount() {
    await axios({
      method: 'get',
      url: 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Cbinancecoin&vs_currencies=usd'
    })
      .then((response) => {
        this.setState({
          coins: response,
          coinsLoad: true
        });
      })
      .catch((error) => {
        this.setState({
          error
        });
      });
  }

  async loadData(numItem) {
    if (numItem > 100) {
      axios({
        method: 'post',
        url: 'https://www.binance.com/bapi/nft/v1/public/nft/product-list',
        headers: {
          "accept": "*/*",
          "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
          "clienttype": "web",
          "content-type": "application/json",
          "lang": "en"
        },
        data: this.state.body
      })
        .then((response) => {
          this.setState({
            items: [...this.state.items, ...response.data.data.rows],
            numItems: this.state.numItems - 100
          });
          if (this.state.numItems > 100) {
            this.setState({
              page: this.state.page + 1
            });
            this.setState({
              body: "{\"category\":0,\"keyword\":\"" + this.state.itemName + "\",\"orderBy\":\"list_time\",\"orderType\":-1,\"page\":" + this.state.page + ",\"rows\":100}"
            });
            this.loadData(this.state.numItems)
          }
        })
        .catch((error) => {
          this.setState({
            error
          });
        });
    }
  }

  mySubmitHandler = async (event) => {
    event.preventDefault();
    await this.setState({
      page: 1
    });
    await this.setState({
      body: "{\"category\":0,\"keyword\":\"" + this.state.itemName + "\",\"orderBy\":\"list_time\",\"orderType\":-1,\"page\":" + this.state.page + ",\"rows\":100}",
    });
    await axios({
      method: 'post',
      url: 'https://www.binance.com/bapi/nft/v1/public/nft/product-list',
      headers: {
        "accept": "*/*",
        "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
        "clienttype": "web",
        "content-type": "application/json",
        "lang": "en"
      },
      data: this.state.body
    })
      .then((response) => {
        this.setState({
          isLoaded: true,
          showComponent: true,
          items: response.data.data.rows,
          numItems: response.data.data.total
        });
        if (this.state.numItems > 100) {
          this.setState({
            page: this.state.page + 1
          });
          this.setState({
            body: "{\"category\":0,\"keyword\":\"" + this.state.itemName + "\",\"orderBy\":\"list_time\",\"orderType\":-1,\"page\":" + this.state.page + ",\"rows\":100}"
          });
          this.loadData(this.state.numItems)
        }
        this.componentDidMount()
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          showComponent: true,
          error
        });
      });
  }
  myChangeHandler = (event) => {
    this.setState({
      itemName: event.target.value,
      body: "{\"category\":0,\"keyword\":\"" + event.target.value + "\",\"orderBy\":\"list_time\",\"orderType\":-1,\"page\":" + this.state.page + ",\"rows\":100}",
    });
  }

  setTradeFilter = (event) => {
    if (event.target.value === "0") {
      this.setState({
        filterTrade : 0
      });
    } else {
      this.setState({
        filterTrade : 1
      });
    }
  }

  render() {

    return (
      <div>
        <form onSubmit={this.mySubmitHandler}>
          <p>Enter Box name, and submit:</p>
          <TextField
            onChange={this.myChangeHandler}
            id="standard-basic"
            label="Search mystery box"
            style={{ margin: 10, width: '50%'}}
            width={1/4}
            fullWidth
            />
          <Button
            style={{ margin: 12 }}
            variant="contained"
            color="primary"
            type='submit'
          >
            Search
          </Button>

          <br></br>

          <RadioGroup className="RadioGroup" row aria-label="position" name="position" defaultValue="top">
            <FormControlLabel
              onChange={this.setTradeFilter}
              value="0"
              control={<Radio color="primary" />}
              label="Buy Now"
            />
            <FormControlLabel
              onChange={this.setTradeFilter}
              value="1"
              control={<Radio color="primary" />}
              label="Auction"
            />
          </RadioGroup>
        </form>

        {this.state.showComponent ?
          <App data={this.state} /> :
          null
        }
      </div>
    );
  }
}

export { Core };