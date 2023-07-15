import { type FC } from 'react';
import './TemplateName.scss';

interface TemplateNameProps {}

const TemplateName: FC<TemplateNameProps> = () => (
  <div className="TemplateName" data-testid="TemplateName">
    TemplateName Component
  </div>
);

export default TemplateName;
