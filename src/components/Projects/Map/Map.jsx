import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import s from '../../../assets/moduleTech.jpg';
import Styles from './Map.module.css';
import Image from 'next/image';

const Map = (props) => {
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

            {props.state.map((eachData) => (
                <Marker
                    key={eachData.id}
                    position={[eachData.Latitude, eachData.Longitude]}
                    eventHandlers={{
                        click: () => {
                            setActiveObject(eachData);
                        },
                    }}
                >
                    {activeObject === eachData && (
                        <Popup
                            position={[eachData.Latitude, eachData.Longitude]}
                            onClose={() => {
                                setActiveObject(null);
                            }}
                        >
                            <div>
                                <h1>{eachData.name}</h1>
                                <p>Tellija: {eachData.completedBy}</p>
                                <p>Lõpetamise kuupäev: {eachData.finishDate}</p>
                                <Image className={Styles.mapCompImage} src={eachData.img} alt="" />
                            </div>
                        </Popup>
                    )}
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;
