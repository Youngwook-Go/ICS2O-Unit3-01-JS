// Copyright (c) 2022 Youngwook All rights reserved
//
// Created by: Youngwook
// Created on: OCT 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit3-01-JS/sw.js", {
    scope: "/ICS2O-Unit3-01-JS/",
  })
}

/**
 * This function displays an alert.
 */

function submit() {
  // input
  const baseA = parseFloat(document.getElementById("base-value-a").value)
  const baseB = parseFloat(document.getElementById("base-value-b").value)
  const height = parseFloat(document.getElementById("height-value").value)

  // process
  const area = ((baseA + baseB) / 2) * height

  // output
  document.getElementById("area").innerHTML =
    "Area of the trapzoid is: " + area.toFixed(2)
}
