import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextInputChatContent } from './TextInputChatContent';
import { AgentProcessingIndicator } from './AgentProcessingIndicator';
import { AvailableTools } from './AvailableTools';
import { AgentTool } from '../types';

export const InputChatContent = () => (
  <TextInputChatContent
    canRegenerate={false}
    isLoading={false}
    onSend={() => {}}
    onRegenerate={() => {}}
  />
);

export const InputChatContentLoading = () => (
  <TextInputChatContent
    disabledSend={true}
    disabledRegenerate={true}
    canRegenerate={false}
    isLoading={true}
    onSend={() => {}}
    onRegenerate={() => {}}
  />
);

export const InputChatContentDisabled = () => {
  const { t } = useTranslation();
  return (
    <TextInputChatContent
      canRegenerate={false}
      isLoading={false}
      disabled={true}
      placeholder={t('bot.label.notAvailableBotInputMessage')}
      onSend={() => {}}
      onRegenerate={() => {}}
    />
  );
};

export const InputChatContentWithRegenerate = () => (
  <TextInputChatContent
    canRegenerate={true}
    isLoading={false}
    onSend={() => {}}
    onRegenerate={() => {}}
  />
);

export const ProcessingIndicator = () => (
  <AgentProcessingIndicator processCount={5}/>
);

export const Tools = () => {
  const availableTools: AgentTool[] = [
    {
      name: 'get_weather',
      description: '',
    },
    {
      name: 'sql_db_query',
      description: '',
    },
    {
      name: 'sql_db_schema',
      description: '',
    },
    {
      name: 'sql_db_list_tables',
      description: '',
    },
    {
      name: 'sql_db_query_checker',
      description: '',
    },
    {
      name: 'internet_search',
      description: '',
    },
  ];
  const [tools, setTools] = useState<AgentTool[]>([]);
  return (
    <AvailableTools
      availableTools={availableTools}
      tools={tools}
      setTools={setTools}
    />
  );
};
