import React from 'react';
import './Sidebar.css';

function Sidebar({selected = false}) {
  return (
    selected ?
    <div className="sidebar">
        <div className='sidebar-title-1'> 
            <span>Text 2/859</span>
        </div>
        <div className='sidebar-title-2'> 
            <p>Transcription</p>
            <p className='sidebar-text-2'>T王子の一 スペシャルモデル なのに 。スペシャルモデル なのに 。</p>
        </div>
        <div className='sidebar-title-3'> 
            <span>Object</span>
            <div class="row">
                <div class="column">
                    <div className='row-text-3'>
                        <span className='title-row-1'>X</span>
                        <span className='number-text'>780</span>
                    </div>
                    <div className='row-text-3'>
                        <span className='title-row-2'>W</span>
                        <span className='number-text'>220</span>
                    </div>
                    <div className='row-text-3'>
                        <span className='title-row-3'>@</span>
                        <span className='number-text'>220</span>
                    </div>
                </div>
                <div class="column">
                    <div className='row-text-3'>
                        <span className='title-row-1'>Y</span>
                        <span className='number-text'>780</span>
                    </div>
                    <div className='row-text-3'>
                        <span className='title-row-2'>H</span>
                        <span className='number-text'>120</span>
                    </div>
                    <div className='row-text-3'>
                        <span className='title-row-3'>#</span>
                        <span className='number-text'>100%</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='sidebar-title-4'> 
            <span>Text</span>
            <div className='row-text-4'>
                <span className="title-row-4">Font Family</span>
                <span className='number-text'>Monoserif</span>
            </div>
            <div className='row-text-4'>
                <span className="title-row-4">Color</span>
                <div className='row-column'>
                    <div className='round-color-5'></div>
                    <span className='number-text'>0000000</span>
                </div>
            </div>
        </div>
        <div className='sidebar-title-5'> 
            <span>Stoke</span>
            <div class="row">
                <div class="column">
                    <div className='row-text-5'>
                        <div className='round-color-5'></div>
                        <span className='number-text'>0000000</span>
                    </div>
                </div>
                <div class="column">
                    <div className='row-text-3'>
                        <span className='title-row-1'>---</span>
                        <span className='number-text'>0.5</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='sidebar-title-6'> 
            <span>Shadow</span>
            <div class="row">
                <div class="column">
                    <div className='row-text-3'>
                        <span className='title-row-1'>X</span>
                        <span className='number-text'>780</span>
                    </div>
                    <div className='row-text-5'>
                        <div className='round-color-5'></div>
                        <span className='number-text'>0000000</span>
                    </div>
                </div>
                <div class="column">
                    <div className='row-text-3'>
                        <span className='title-row-1'>Y</span>
                        <span className='number-text'>780</span>
                    </div>
                    <div className='row-text-3'>
                        <span className='title-row-2'>#</span>
                        <span className='number-text'>10</span>
                    </div>
                </div>
            </div>
        </div>
    </div> :

     <div className="sidebar">
        <div className='sidebar-title-1'> 
            <p>Chapter Name</p>
            <p className='chapter'>Chapter 1</p>
        </div>
    </div>
  );
}

export default Sidebar;
