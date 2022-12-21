import moment from "moment/moment";

export interface Task {
    id: number,
    created: ReturnType<typeof moment>,
    timeToDelete: number,
}