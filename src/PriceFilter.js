import React, {useState, useEffect} from 'react'

function PriceFilter (props) {
  const [valueOf, setValueOf] = useState(0)
  const [valueTo, setValueTo] = useState(999999)

  const onChangeOf = (e) => {
    const target = e.target.value
    setValueOf (target)
  }

  const onChangeTo = (e) => {
    const target = e.target.value
    setValueTo (target)
  }

  useEffect (() => {
    props.acceptancePriceTo(valueTo)
    props.acceptancePriceOf(valueOf)
  }, [valueOf, valueTo])
  

  return (
    <div className="price_filter">
      <div className="price_filter_name">
        Price Filter
      </div>
      <div className="price_filter_range">
        Of 
          <input className="input_of" value={valueOf} onChange={(e) => onChangeOf(e)} />
        To 
          <input className="input_to" value={valueTo} onChange={(e) => onChangeTo(e)} />
      </div>
    </div>
  )
}

export default PriceFilter;
