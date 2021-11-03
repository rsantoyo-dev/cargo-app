export interface LoadSize {
  length: number,
  width: number,
  height: number,
  volume: number
}

export interface ShippingSettingsPerKilometer {
  volumeCost: number,
  sizeCost: number,
  gasCost: number
}
