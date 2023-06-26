import getConversationById from "@/app/actions/getConversationById";
import getMessages from "@/app/actions/getMessages";
import EmptyState from "@/app/components/emptyState";
import Header from "./components/header";
import Body from "./components/body";
import Form from "./components/form";

interface ConversationParams {
  conversationId: string;
}

const ConversationId = async ({ params }: { params: ConversationParams }) => {
  const conversation = await getConversationById(params.conversationId);
  const messages = await getMessages(params.conversationId);

  if (!conversation) {
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          <EmptyState />
        </div>
      </div>
    );
  }

  return (
    <div className="lg:pl-80 h-full">
      <div className="h-full flex flex-col">
        <Header conversation={conversation}></Header>
        <Body />
        <Form />
      </div>
    </div>
  );
};

export default ConversationId;
