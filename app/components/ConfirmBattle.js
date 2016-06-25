var React = require('react');
var transparentBg = require('../styles').transparentBg;
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var MainContainer = require('./MainContainer');

function ConfirmBattle (props) {
	return props.isLoading === true
		? <p> LOADING! </p>
		: <MainContainer>
			<h1>Confirm Players</h1>
			<div className="col-sm-8 col-sm-offset-2">
				<UserDetailsWrapper header='Player One'>
						<UserDetails info={props.playersInfo[0]} />
				</UserDetailsWrapper>
				
				<UserDetailsWrapper header='Player Two'>
						<UserDetails info={props.playersInfo[1]} />
				</UserDetailsWrapper>
			</div>
			<div className="col-sm-8 col-sm-offset-2">
				<div className="col-sm-12">
					<button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>
					Initiate Battle
					</button>
				</div>
				<div className="col-sm-12">
					<Link to='/playerOne'>
						<button type='button' className='btn btn-lg btn-danger'> Restart </button>
					</Link>
				</div>
			</div>
		</MainContainer>

}

ConfirmBattle.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	onInitiateBattle: PropTypes.func.isRequired,
	playersInfo: PropTypes.array.isRequired,
}

module.exports = ConfirmBattle;