import React, { useEffect } from 'react'
import { createControlComponent } from "@react-leaflet/core";
import L from "leaflet";
import "leaflet-routing-machine";
import './index.css'
import axios from "axios";
import { useParams } from 'react-router-dom'

function createRoutineMachineLayer() {
  const params = useParams()
  const Token = localStorage.getItem("token")
  const fetchOrder = (e) => {
    axios.get(`https://earthlover.herokuapp.com/api/customer/order/show/${params.id}`, {
      headers: { 'Authorization': 'Bearer ' + Token }
    })
      .then((res) => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err.response)
      })
  }

  useEffect(() => {
    fetchOrder()
  }, []);

  const instance = L.Routing.control({
    waypoints: [
      L.latLng(-7.976660118711748, 112.65905891292945),
      L.latLng(-7.937591285347999, 112.61961093842913)
    ],
    lineOptions: {
      styles: [{ color: "#16BF78", weight: 4 }]
    }
  });
  return(
    <></>
  )
}

const RoutingMachine = createControlComponent(createRoutineMachineLayer);
export default RoutingMachine;