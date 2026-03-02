export type PageId = 'Overview' | 'Issues' | 'Files' | 'Threat Details' | 'Threats' | 'Help & Supports' | 'Settings' | 'Upgrade' | 'Logout' | 'Themes';

export interface ThreatDetail {
  date: string;
  deviceId: string;
  virus: string;
  path: string;
  type: string;
  status: 'Blocked' | 'Quarantined' | 'Cleaned';
}

export interface SecurityIssue {
  id: string;
  title: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  status: 'Open' | 'Resolved' | 'In Progress';
  timestamp: string;
  description: string;
}

export interface FileScan {
  id: string;
  name: string;
  size: string;
  type: string;
  lastScanned: string;
  threatLevel: 'Safe' | 'Suspicious' | 'Malicious';
}
