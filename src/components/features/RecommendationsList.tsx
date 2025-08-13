import { Card, CardHeader, CardContent } from '@/components/ui';

interface RecommendationsListProps {
  recommendations: string[];
  title?: string;
}

export const RecommendationsList = ({ 
  recommendations, 
  title = "Key Recommendations" 
}: RecommendationsListProps) => {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recommendations.map((recommendation, index) => (
            <div 
              key={index}
              className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50"
            >
              <span className="text-lg leading-none mt-0.5">
                {recommendation.includes('✅') && '✅'}
                {recommendation.includes('⚠️') && '⚠️'}
                {recommendation.includes('❌') && '❌'}
                {recommendation.includes('📈') && '📈'}
                {recommendation.includes('📉') && '📉'}
                {recommendation.includes('🚀') && '🚀'}
                {recommendation.includes('🏢') && '🏢'}
                {!recommendation.match(/[✅⚠️❌📈📉🚀🏢]/) && '💡'}
              </span>
              <p className="text-sm text-gray-700 leading-relaxed flex-1">
                {recommendation.replace(/[✅⚠️❌📈📉🚀🏢]/g, '').trim()}
              </p>
            </div>
          ))}
        </div>
        
        {recommendations.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <p className="text-sm">No recommendations available</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};