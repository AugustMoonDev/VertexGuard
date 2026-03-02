import { SecurityIssue, FileScan } from '../types';

export const mockIssues: (SecurityIssue & { category: string })[] = [
  { id: 'ISS-001', title: 'Unauthorized SSH Access Attempt', severity: 'Critical', status: 'Open', timestamp: '2024-05-12 14:20', description: 'Multiple failed login attempts detected from IP 45.12.3.1.', category: 'Network' },
  { id: 'ISS-002', title: 'Outdated SSL Certificate', severity: 'Medium', status: 'In Progress', timestamp: '2024-05-12 12:10', description: 'The certificate for mail.vertexguard.com expires in 3 days.', category: 'Compliance' },
  { id: 'ISS-003', title: 'Malware Signature Detected', severity: 'High', status: 'Open', timestamp: '2024-05-12 11:45', description: 'Heuristic scan found suspicious patterns in user_data.zip.', category: 'Endpoint' },
  { id: 'ISS-004', title: 'Firewall Rule Misconfiguration', severity: 'Low', status: 'Resolved', timestamp: '2024-05-11 09:30', description: 'Port 8080 was left open unnecessarily.', category: 'Firewall' },
];

export const mockFiles: FileScan[] = [
  { id: '1', name: 'system_core.dll', size: '2.4 MB', type: 'Binary', lastScanned: '2 mins ago', threatLevel: 'Safe' },
  { id: '2', name: 'user_config.json', size: '12 KB', type: 'JSON', lastScanned: '5 mins ago', threatLevel: 'Safe' },
  { id: '3', name: 'temp_cache_0x9.tmp', size: '156 KB', type: 'Temporary', lastScanned: '12 mins ago', threatLevel: 'Suspicious' },
  { id: '4', name: 'network_driver.sys', size: '1.1 MB', type: 'System', lastScanned: '1h ago', threatLevel: 'Safe' },
  { id: '5', name: 'unknown_payload.exe', size: '450 KB', type: 'Executable', lastScanned: '2h ago', threatLevel: 'Malicious' },
];

export const riskData = [
  { subject: 'Network', A: 120, B: 110, fullMark: 150 },
  { subject: 'Endpoint', A: 98, B: 130, fullMark: 150 },
  { subject: 'Cloud', A: 86, B: 130, fullMark: 150 },
  { subject: 'Identity', A: 99, B: 100, fullMark: 150 },
  { subject: 'Data', A: 85, B: 90, fullMark: 150 },
  { subject: 'Email', A: 65, B: 85, fullMark: 150 },
];

export const threatSummary = [
  { name: 'Phishing', value: 400, color: '#F72585' },
  { name: 'Malware', value: 300, color: '#7209B7' },
  { name: 'DDoS', value: 300, color: '#3A0CA3' },
  { name: 'Exploits', value: 200, color: '#4361EE' },
];
