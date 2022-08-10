import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import './index.css'

const createRoutineMachineLayer = () => {
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(-7.976660118711748, 112.65905891292945),
      L.latLng(-7.937591285347999, 112.61961093842913)
    ],
    lineOptions: {
      styles: [{ color: "#16BF78", weight: 4 }]
    }
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
