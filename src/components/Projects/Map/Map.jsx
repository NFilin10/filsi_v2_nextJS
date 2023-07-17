import Navbar from "../../Common/Navbar/Navbar";

import {useState} from 'react'

import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

import s from '../../../assets/moduleTech.jpg'

import Styles from'./Map.module.css'

const Map = () => {

    const objectData = [
        {
            "Id": 1,
            "ObjectName": "Module Tech",
            "OrderComp": "Maru",
            "FinishDate": "61,695",
            "Latitude": 59.446804506266645,
            "Longitude": 24.943789984457965
        },

    ]

    const [activeObject, setActiveObject] = useState(null);
    return (

            <MapContainer
                center={[59.437063309556045, 24.745293055315415]}

                zoom={10}
                scrollWheelZoom={true}

            >
                <TileLayer
                    attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                    url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
                />

                {objectData.map(eachData => (
                    <Marker
                        key={eachData.Id}
                        position={[eachData.Latitude, eachData.Longitude]}
                        eventHandlers={{
                            click: () => {
                                setActiveObject(eachData)
                            }
                        }}
                    />
                ))}

                {activeObject && (
                    <Popup
                        position={[activeObject.Latitude, activeObject.Longitude]}
                        onClose={() => {
                            setActiveObject(null)
                        }}
                    >
                        <div>
                            <h1>{activeObject.ObjectName}</h1>
                            <p>Tellija: {activeObject.OrderComp}</p>
                            <p>Lõpetamise kuupäev: {activeObject.FinishDate}</p>
                            <img className={Styles.mapCompImage} src={s} alt=""/>
                        </div>
                    </Popup>
                )}
            </MapContainer>


    );
}

export default Map