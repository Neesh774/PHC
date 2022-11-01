import { PUBLIC_NOTION_API_KEY } from '$env/static/public';
import { Client } from '@notionhq/client';
import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    let nextMeeting = "TBD";

    const notion = new Client({ auth: PUBLIC_NOTION_API_KEY });
    const databaseId = 'e8c8d9f8c7be4dec8dcdd20db2f6d017';
    const response = await notion.databases
        .query({
            database_id: databaseId,
            filter: {
                and: [
                    {
                        property: 'Name',
                        rich_text: {
                            equals: 'Hack Club Meeting'
                        }
                    },
                    {
                        property: 'Date',
                        date: {
                            on_or_after: new Date().toISOString().split('T')[0]
                        }
                    }
                ]
            },
            sorts: [
                {
                    property: 'Date',
                    direction: 'ascending'
                }
            ]
        })
        .catch((err) => {
            console.error(err);
        });
    if (response && response.results.length > 0) {
        const pageId = response.results[0].id;
        const page = await notion.pages.retrieve({ page_id: pageId }).catch((err) => {
            console.error(err);
        });
        if (page) {
            const dateObj = (page as PageObjectResponse).properties.Date;
            if (dateObj.type != "date" || !dateObj.date) return;
            const str = dateObj.date.start.split('-');
            const month = parseInt(str[1]);
            const day = parseInt(str[2]);
            const year = parseInt(str[0]);

            const date = new Date();
            date.setFullYear(year);
            date.setUTCMonth(month);
            date.setUTCDate(day);

            const months = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ];
            const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',];

            nextMeeting = `${days[date.getDate()]}, ${months[date.getMonth() - 1]} ${date.getDate()}`;
        }
    }

    return {
        msg: nextMeeting
    }
}
