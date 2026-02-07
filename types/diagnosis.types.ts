export interface DiagnosisType {
    id: string
    severity: number
    status: string
    image_base64: string
    timestamp: string | Date

    zone_id: number
    disease_id: number
    current_weather_id: number
    ai_data_id: number
}