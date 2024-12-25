import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface CertificatesCardProps {
  title: string;
  organization: string;
  issuedDate: string;
  credentialId?: string;
  credentialLink?: string;
  skills?: string[];
}

export const CertificatesCard = ({
  title,
  organization,
  issuedDate,
  credentialId,
  credentialLink,
  skills,
}: CertificatesCardProps) => {
  return (
    <Card className="backdrop-blur-sm bg-white/10 border-white/20">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>
          {organization} • Issued {issuedDate}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {credentialId && <p className="text-sm text-gray-300">Credential ID: {credentialId}</p>}
        {credentialLink && (
          <a
            href={credentialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-400 underline"
          >
            View Credential
          </a>
        )}
        {skills && skills.length > 0 && (
          <p className="mt-2 text-sm text-gray-300">
            <strong>Skills:</strong> {skills.join(", ")}
          </p>
        )}
      </CardContent>
    </Card>
  );
};