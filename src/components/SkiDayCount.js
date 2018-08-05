import '../stylesheets/ui.scss'

export const SkiDayCount = React.createClass({
  render() {
    return (
      <div className="ski-day-count">
        <div className="total-days">
            <span> 5 Days</span>
          <div className="power-days">
            <span> 2 Days</span>
          </div>
          <div className="backcountry-days">
            <span> 1 Hiking Day</span>
          </div>
        </div>
      </div>
    )
  }