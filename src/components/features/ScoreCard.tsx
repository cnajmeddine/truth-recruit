import { Card, CardHeader, CardContent, Badge } from '@/components/ui';
import { getScoreLabel, getScoreColor, getScoreEmoji } from '@/utils';

interface ScoreCardProps {
  title: string;
  score: number;
  description: string;
  trend?: 'up' | 'down' | 'stable';
  details?: string[];
}

export const ScoreCard = ({ title, score, description, trend, details }: ScoreCardProps) => {
  const scoreLabel = getScoreLabel(score);
  const scoreColor = getScoreColor(score);
  const scoreEmoji = getScoreEmoji(score);

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {trend && (
            <div className="flex items-center space-x-1 text-sm">
              {trend === 'up' && <span className="text-success-600">↗️</span>}
              {trend === 'down' && <span className="text-danger-600">↘️</span>}
              {trend === 'stable' && <span className="text-gray-500">→</span>}
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="text-4xl font-bold text-gray-900">
              {score}
            </div>
            <div className="flex flex-col space-y-1">
              <Badge variant={scoreColor as 'success' | 'primary' | 'warning' | 'danger'}>
                <span className="text-current">{scoreEmoji}</span> {scoreLabel}
              </Badge>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm">
            {description}
          </p>
          
          {details && details.length > 0 && (
            <div className="space-y-1">
              {details.map((detail, index) => (
                <p key={index} className="text-xs text-gray-500 flex items-start">
                  <span className="mr-1">•</span>
                  <span>{detail}</span>
                </p>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};