export interface DiagnosisType {
    id: string
    severity: number
    status: string
    image_base64: string
    timestamp: string | Date

    zone_id: number
    disease_id: string
    current_weather_id: number
    ai_data_id: number

    disease?: string
    disease_name?: string
    user_name?: string
    image?: string
    description?: string
    severityCategory?: string
    confidence_level?: number
}
