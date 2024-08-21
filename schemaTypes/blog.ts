import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Τίτλος',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Τίτλος στο url',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'author',
            title: 'Συγγραφέας',
            type: 'string',
        }),
        defineField({
            name: 'publishedAt',
            title: 'Ημερομηνία',
            type: 'date',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Εικόνα',
            type: 'image',
            options: {
                hotspot: true,  // Allows for better image cropping and focus
            },
        }),
        defineField({
            name: 'snippet',
            title: 'Μικρή περιγραφή',
            type: 'text',
        }),
        defineField({
            name: 'content',
            title: 'Περιεχόμενο',
            type: 'array',
            of: [
                {
                    type: 'block',
                },
            ],
        }),
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author',
            media: 'image',
        },
        prepare(selection) {
            const { author } = selection;
            return { ...selection, subtitle: author && `by ${author}` };
        },
    },
});
