import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const dashboards = async ({ ownerId }) => {
  if (ownerId) {
    return db.dashboard.findMany({
      where: { ownerId: ownerId },
    })
  } else {
    return db.dashboard.findMany()
  }
}

export const dashboard = ({ id }) => {
  return db.dashboard.findOne({
    where: { id },
  })
}

export const createDashboard = ({ input }) => {
  requireAuth()
  input.ownerId = context.currentUser.sub
  input.ownerEmail = context.currentUser[process.env.AUTH0_NAMESPACE + 'email']
  return db.dashboard.create({
    data: input,
  })
}

export const updateDashboard = ({ id, input }) => {
  requireAuth()
  input.updatedAt = new Date()
  return db.dashboard.update({
    data: input,
    where: { id },
  })
}

export const deleteDashboard = ({ id }) => {
  requireAuth()
  return db.dashboard.delete({
    where: { id },
  })
}
