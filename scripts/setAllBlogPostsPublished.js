const { createClient } = require('@supabase/supabase-js');

// Use your Supabase project URL and service role key (for admin scripts only)
const supabaseUrl = 'https://egisjciqfzdqofvcygts.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVnaXNqY2lxZnpkcW9mdmN5Z3RzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NDYxNzE4NiwiZXhwIjoyMDcwMTkzMTg2fQ.EpTrLzB0DafE0X1LZRO92pRCz4FK4ibygs7li8RRSow';
const supabase = createClient(supabaseUrl, supabaseKey);

async function setAllPublished() {
    // Update all posts where status is null or missing
    const { error } = await supabase
        .from('blog_posts')
        .update({ status: 'published' })
        .is('status', null);
    if (error) {
        console.error('Failed to update posts:', error.message);
    } else {
        console.log('All posts with null status set to published.');
    }
}

setAllPublished();
