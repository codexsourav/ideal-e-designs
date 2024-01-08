export interface Language {
    code: string;
    name: string;
    native: string;
    success?: boolean;
}

export interface Location {
    geoname_id: number;
    capital: string;
    languages: Language[];
    country_flag: string;
    country_flag_emoji: string;
    country_flag_emoji_unicode: string;
    calling_code: string;
    is_eu: boolean;
}

export interface TimeZone {
    id: string;
    current_time: string;
    gmt_offset: number;
    code: string;
    is_daylight_saving: boolean;
}

export interface Currency {
    code: string;
    name: string;
    plural: string;
    symbol: string;
    symbol_native: string;
}

export interface Connection {
    asn: number;
    isp: string;
}

export interface Security {
    is_proxy: boolean;
    proxy_type: string | null;
    is_crawler: boolean;
    crawler_name: string | null;
    crawler_type: string | null;
    is_tor: boolean;
    threat_level: string;
    threat_types: string[] | null;
}

export interface ClientInfo {
    ip: string;
    hostname: string;
    type: string;
    continent_code: string;
    continent_name: string;
    country_code: string;
    country_name: string;
    region_code: string;
    region_name: string;
    city: string;
    zip: string;
    latitude: number;
    longitude: number;
    location: Location;
    time_zone: TimeZone;
    currency: Currency;
    connection: Connection;
    security: Security;
}

export interface IIPErrorResponseType {
    success: boolean;
    error: {
        code: number;
        type: string;
        info: string;
    };
}


export type IPAddressType = Language & Location & TimeZone & Currency & Connection & Security & ClientInfo;