export interface WorkedWith {
    name: string;
    logo: string;
}

export interface Certification {
    name: string;
    link: string;
    logo: string;
}

export interface SocialLink {
    name: string;
    link: string;
}

export interface Interest {
    value: string;
    logo: string;
}

export interface Ecosystem {
    name: string;
    proficiency: number;
}

export interface Auditor {
    id: number;
    subdomain: string;
    name: string;
    position: string;
    profile_image_url: string;
    worked_with: WorkedWith[];
    github_link: string;
    github_username: string;
    twitter_link: string;
    linkedin_link: string;
    email: string;
    phone_number: string;
    about: string;
    certifications: Certification[];
    social_links: SocialLink[];
    tools: string[];
    interests: Interest[];
    ecosystem: Ecosystem[];
    creation_date: string;
}

export interface Report {
    logo: string;
    title: string;
    report_id: string;
    tags?: string;
    platforms?: string;
    languages?: string;
    executive_summary?: string;
}

export interface ReportsResponse {
    auditor: {
        subdomain: string;
        name: string;
    };
    reports: Report[];
    count: number;
}

export interface Finding {
    title: string;
    severity: "Critical" | "High" | "Medium" | "Low" | "Info";
    status: string;
    report: Report;
}

export interface FindingsStats {
    num_reports: number;
    num_findings: number;
    total_market_cap: number;
    success_rate: number;
    findings_by_severity: {
        Critical?: number;
        High?: number;
        Medium?: number;
        Low?: number;
        Info?: number;
    };
}

export interface FindingsResponse {
    auditor: {
        subdomain: string;
        name: string;
    };
    stats: FindingsStats;
    findings: Finding[];
    count: number;
}
