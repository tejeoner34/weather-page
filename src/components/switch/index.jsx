import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/system';
import { useSwitch } from '@mui/base/SwitchUnstyled';
import { MetricContext } from "../../context/metric-context";
import { useContext } from "react";
import './style.css'


const BasicSwitchRoot = styled('span')`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 60px;
  height: 31px;
  background: #C4C4C4;
  margin: 10px;
  cursor: pointer;
  border-top: solid 2px gray;
  border-left: solid 2px gray;
  border-bottom: solid 1px white;
  border-right: solid 1px white;

  &.Switch-disabled {
    
    cursor: not-allowed;
  }

  &.Switch-checked {
    background: #C4C4C4;
  }
`;

const BasicSwitchInput = styled('input')`
  cursor: inherit;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  margin: 0;
`;

const BasicSwitchThumb = styled('span')`
  display: block;
  width: 23px;
  height: 23px;
  top: 2px;
  left: 2px;
  border: solid 2px white;
  background-color: #AA6CD2;
  position: relative;
  transition: all 200ms ease;
  box-shadow: 3px 3px 8px 0px rgba(0,0,0,0.83);

  &.Switch-focusVisible {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.Switch-checked {
    left: 32px;
    top: 2px;
    border: solid 2px white;
    background-color: #AA6CD2;
  }
`;

function BasicSwitch(props) {


  const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);

  const stateClasses = {
    'Switch-checked': checked,
    'Switch-disabled': disabled,
    'Switch-focusVisible': focusVisible,
  };

  return (
    <BasicSwitchRoot className={clsx(stateClasses)}>
      <BasicSwitchThumb className={clsx(stateClasses)} />
      <BasicSwitchInput {...getInputProps()} aria-label="Demo switch" />
    </BasicSwitchRoot>
  );
}

export default function UnitChange(props) {
    const [metric, setMetric] = useContext(MetricContext);


let metrica = '';
    const handleChange =(e)=>{
        
        metric === 'metric' ? setMetric('imperial') : setMetric('metric');
        metric === 'metric' ? metrica = 'imperial' : metrica ='metric';
        
        
        props.onMetricChange(metrica);
    }

  return (
    <div className='switch'>
      <p className={metric==='metric'? 'selected':''}>ºC</p>
      <BasicSwitch onChange={handleChange}/>
      <p className={metric === 'imperial'? 'selected': ''}>ºF</p>
      
    </div>
  );
}

