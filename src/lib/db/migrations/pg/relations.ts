import { relations } from "drizzle-orm/relations";
import {
  user,
  project,
  session,
  account,
  chatThread,
  chatMessage,
} from "./schema";

export const projectRelations = relations(project, ({ one }) => ({
  user: one(user, {
    fields: [project.userId],
    references: [user.id],
  }),
}));

export const userRelations = relations(user, ({ many }) => ({
  projects: many(project),
  sessions: many(session),
  accounts: many(account),
  chatThreads: many(chatThread),
}));

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id],
  }),
}));

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id],
  }),
}));

export const chatThreadRelations = relations(chatThread, ({ one, many }) => ({
  user: one(user, {
    fields: [chatThread.userId],
    references: [user.id],
  }),
  chatMessages: many(chatMessage),
}));

export const chatMessageRelations = relations(chatMessage, ({ one }) => ({
  chatThread: one(chatThread, {
    fields: [chatMessage.threadId],
    references: [chatThread.id],
  }),
}));
